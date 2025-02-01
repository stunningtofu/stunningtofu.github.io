---
outline: deep
---

# Creating a Service Account in Kubernetes

## Step 1: Create a Service Account

You can create a service account using a YAML manifest. Create a file called `service-account.yaml` with the following content:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-service-account
  namespace: default  # Change this if needed
```

Apply the YAML file to create the service account:

```sh
kubectl apply -f service-account.yaml
```

## Step 2: Verify the Service Account

To verify that the service account has been created, run:

```sh
kubectl get serviceaccount my-service-account -n default
```

## Step 3: Create a Role and RoleBinding (Optional, for Permissions)

A service account alone does not have permissions. You need to create a `Role` and `RoleBinding` to grant permissions. 

Create a `role.yaml` file:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: my-role
  namespace: default
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list"]
```

Apply the role:

```sh
kubectl apply -f role.yaml
```

Now, create a `rolebinding.yaml` file:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: my-rolebinding
  namespace: default
subjects:
  - kind: ServiceAccount
    name: my-service-account
    namespace: default
roleRef:
  kind: Role
  name: my-role
  apiGroup: rbac.authorization.k8s.io
```

Apply the role binding:

```sh
kubectl apply -f rolebinding.yaml
```

## Step 4: Get the Token for the Service Account

To retrieve the service account token, run:

```sh
kubectl get secret $(kubectl get serviceaccount my-service-account -o jsonpath='{.secrets[0].name}') -o jsonpath='{.data.token}' | base64 --decode
```

## Step 5: Use the Service Account in a Pod

To use the service account in a Pod, specify it in the Pod definition:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  namespace: default
spec:
  serviceAccountName: my-service-account
  containers:
    - name: my-container
      image: nginx
```

Apply the Pod configuration:

```sh
kubectl apply -f pod.yaml
```

## Conclusion

You have successfully created a Kubernetes service account and assigned it permissions using a Role and RoleBinding. You can now use this service account in your workloads.
