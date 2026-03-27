---
title: stunningtofu | Freelance DevOps Engineer & Server Maintenance
layout: home
description: stunningtofu offers professional DevOps and Cloud Infrastructure consulting. Specializing in AWS, Google Cloud, DigitalOcean, Vultr, Kubernetes, Docker Swarm, and Grafana.
---

<!-- NAV -->
<nav class="bg-light-gray border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between h-auto sm:h-16 items-center py-4 sm:py-0">
            <a href="#top" aria-label="Back to Top"
                class="flex-shrink-0 font-bold text-2xl text-dark-slate tracking-tight mb-3 sm:mb-0 hover:text-deep-blue transition-colors">
                stunning<span class="text-deep-blue">tofu</span>.
            </a>

            <button id="nav-toggle" type="button"
                class="sm:hidden inline-flex items-center justify-center rounded-md bg-white/10 p-2 text-dark-slate hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-deep-blue"
                aria-controls="nav-menu" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div id="nav-menu"
                class="hidden sm:flex flex-col sm:flex-row justify-center items-center w-full sm:w-auto mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-8">
                <a href="#top" class="text-muted-gray hover:text-deep-blue transition-colors font-medium text-sm sm:text-base">Home</a>
                <a href="#platforms" class="text-muted-gray hover:text-deep-blue transition-colors font-medium text-sm sm:text-base">Platforms</a>
                <a href="#services" class="text-muted-gray hover:text-deep-blue transition-colors font-medium text-sm sm:text-base">Services</a>
                <a href="/learn/" class="text-muted-gray hover:text-deep-blue transition-colors font-medium text-sm sm:text-base">Learn</a>
                <a href="#contact" class="text-muted-gray hover:text-deep-blue transition-colors font-medium text-sm sm:text-base">Contact</a>
            </div>
        </div>
    </div>
</nav>

<!-- HEADER -->
<header class="bg-dark-slate text-light-gray py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div class="w-full md:w-2/3">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                Server Infrastructure & <span class="text-deep-blue">Container Orchestration</span> Solutions
            </h1>
            <p class="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
                I am stunningtofu, a professional Cloud Infrastructure & DevOps Engineer ready to architect, manage,
                and optimize your backend systems. Available for freelance engagements to ensure high availability,
                robust security, and seamless scalability for your applications.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#services" 
                   class="inline-flex items-center justify-center w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">View Technical Services</a>
                <a href="#contact" 
                   class="inline-flex items-center justify-center w-full sm:w-auto bg-transparent border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">Schedule a Consultation</a>
            </div>
        </div>
    </div>
</header>

<!-- PLATFORMS -->
<section id="platforms" class="py-12 sm:py-16 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-dark-slate mb-4 tracking-tight">Cloud Providers & Infrastructure Experience</h2>
        <p class="text-muted-gray mb-10 max-w-2xl mx-auto text-sm sm:text-base">Extensive hands-on experience provisioning, securing, and maintaining production-grade environments across leading cloud platforms.</p>

        <div class="flex flex-wrap justify-center items-center gap-10 sm:gap-16 mt-10">
            <div class="flex flex-col items-center group" aria-label="Amazon Web Services">
                <img src="https://api.iconify.design/fa6-brands:aws.svg?color=%23343A40" alt="AWS Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">AWS</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="Google Cloud Platform">
                <img src="https://api.iconify.design/mdi:google-cloud.svg?color=%23343A40" alt="Google Cloud Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">Google Cloud</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="DigitalOcean">
                <img src="https://api.iconify.design/fa6-brands:digital-ocean.svg?color=%23343A40" alt="DigitalOcean Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">DigitalOcean</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="Vultr">
                <img src="https://api.iconify.design/simple-icons:vultr.svg?color=%23343A40" alt="Vultr Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">Vultr</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="Docker Swarm">
                <img src="https://api.iconify.design/simple-icons:docker.svg?color=%23343A40" alt="Docker Swarm Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">Docker Swarm</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="Kubernetes">
                <img src="https://api.iconify.design/simple-icons:kubernetes.svg?color=%23343A40" alt="Kubernetes Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">Kubernetes</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="Jenkins">
                <img src="https://api.iconify.design/simple-icons:jenkins.svg?color=%23343A40" alt="Jenkins Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">Jenkins</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="GitHub Actions">
                <img src="https://api.iconify.design/simple-icons:githubactions.svg?color=%23343A40" alt="GitHub Actions Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">GitHub Actions</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="GitLab">
                <img src="https://api.iconify.design/simple-icons:gitlab.svg?color=%23343A40" alt="GitLab Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">GitLab</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="CentOS">
                <img src="https://api.iconify.design/simple-icons:centos.svg?color=%23343A40" alt="CentOS Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">CentOS</span>
            </div>
            <div class="flex flex-col items-center group" aria-label="Ubuntu">
                <img src="https://api.iconify.design/simple-icons:ubuntu.svg?color=%23343A40" alt="Ubuntu Logo" class="w-16 h-16 sm:w-20 sm:h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span class="mt-4 text-sm font-semibold text-dark-slate">Ubuntu</span>
            </div>
        </div>
    </div>
</section>

<!-- SERVICES -->
<main id="services" class="py-16 sm:py-20 bg-light-gray">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold text-dark-slate tracking-tight">DevOps & IT Infrastructure Services</h2>
            <p class="mt-4 text-muted-gray max-w-2xl mx-auto text-sm sm:text-base">A structured, engineering-first approach to maintaining and scaling your production environments.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article class="p-6 sm:p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 class="text-lg sm:text-xl font-bold text-dark-slate mb-3 border-b-2 border-deep-blue pb-2 inline-block">Advanced Server Maintenance</h3>
                <p class="text-muted-gray text-sm leading-relaxed mb-4">Comprehensive Linux server administration including proactive security patching, firewall management, resource optimization, and developing <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Bash/Python</span> automation scripts for routine system maintenance.</p>
            </article>

            <article class="p-6 sm:p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 class="text-lg sm:text-xl font-bold text-dark-slate mb-3 border-b-2 border-deep-blue pb-2 inline-block">Kubernetes & Docker Setup</h3>
                <p class="text-muted-gray text-sm leading-relaxed mb-4">Architecture and deployment of containerized applications using <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Docker</span>. Managing production-scale orchestration via <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Docker Swarm</span> and <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Kubernetes (K8s)</span> to guarantee zero-downtime deployments.</p>
            </article>

            <article class="p-6 sm:p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 class="text-lg sm:text-xl font-bold text-dark-slate mb-3 border-b-2 border-deep-blue pb-2 inline-block">Observability & Monitoring</h3>
                <p class="text-muted-gray text-sm leading-relaxed mb-4">Advanced metrics configuration utilizing <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Grafana</span> and <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Prometheus</span>. Designing real-time visualization dashboards to monitor server workloads, network traffic anomalies, and application health.</p>
            </article>

            <article class="p-6 sm:p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 class="text-lg sm:text-xl font-bold text-dark-slate mb-3 border-b-2 border-deep-blue pb-2 inline-block">WordPress Server Optimization</h3>
                <p class="text-muted-gray text-sm leading-relaxed mb-4">Performance tuning for web servers (<span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Nginx</span>/<span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">Apache</span>), SSL certificate provisioning, database optimization (<span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">MySQL</span>/<span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">MariaDB</span>), and implementing server-side caching mechanisms for high-traffic environments.</p>
            </article>

            <article class="p-6 sm:p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 sm:col-span-2 lg:col-span-2">
                <h3 class="text-lg sm:text-xl font-bold text-dark-slate mb-3 border-b-2 border-deep-blue pb-2 inline-block">Cloud Ecosystem Integration</h3>
                <p class="text-muted-gray text-sm leading-relaxed mb-4">Implementing cloud architecture best practices. Specializing in secure <span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">VPC</span> networking, Identity and Access Management (<span class="font-mono bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-xs sm:text-sm border border-gray-200 font-medium">IAM/SSO</span>), and isolating workloads effectively within modern cloud environments.</p>
            </article>
        </div>
    </div>
</main>

<!-- WORKFLOW PROCESS -->
<section id="workflow-process" class="workflow-section py-16 sm:py-20 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
            <h2 class="text-2xl sm:text-3xl font-bold text-dark-slate tracking-tight">Our Professional Workflow</h2>
            <p class="mt-4 text-muted-gray max-w-2xl mx-auto text-sm sm:text-base">
                A structured, transparent, and results-oriented process to ensure your infrastructure project runs smoothly from start to finish.
            </p>
        </div>

        <div class="relative">
            <!-- SVG Flow Line -->
            <svg class="absolute top-10 left-0 w-full hidden lg:block" height="80" aria-hidden="true">
                <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#343A40">
                            <animate attributeName="offset" values="0;1" dur="4s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stop-color="#6C757D" />
                    </linearGradient>
                </defs>
                <line x1="0" y1="40" x2="100%" y2="40" stroke="url(#flowGradient)" stroke-width="3" stroke-dasharray="12 8" />
            </svg>

            <!-- Workflow Steps -->
            <div id="workflow" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            </div>
        </div>
    </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-16 sm:py-20 bg-white border-t border-gray-200">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-dark-slate mb-4 sm:mb-6 tracking-tight">Enhance Your System Reliability Today</h2>
        <p class="text-muted-gray mb-8 sm:mb-10 text-base sm:text-lg px-2">
            Sluggish performance or system vulnerabilities can severely impact business operations. I am ready to
            discuss your architectural requirements or provide deep-dive troubleshooting for your current infrastructure.
        </p>
        <a href="mailto:johanputrarahmadan@gmail.com?subject=hellostunningtofu"
            class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base sm:text-lg text-white shadow-xl transition-all duration-200 transform bg-gradient-to-r from-blue-600 via-blue-700 to-deep-blue hover:from-blue-700 hover:via-blue-800 hover:to-deep-blue hover:shadow-2xl hover:-translate-y-0.5">
            Request a Service Quote
        </a>
    </div>
</section>

<!-- FOOTER -->
<footer class="bg-dark-slate py-8 text-center text-gray-400 text-sm px-4">
    <p>&copy; 2026 stunningtofu. All rights reserved. | Architected for operational excellence.</p>
</footer>

<!-- ==================== WORKFLOW SCRIPT + ANIMATION ==================== -->
<script>
    const steps = [
        { 
            title: "Consultation & Diagnosis", 
            icon: "mdi:lightbulb-outline",
            points: [
                "Understanding your business needs and technical objectives",
                "Identifying infrastructure challenges and opportunities",
                "Providing initial solution recommendations"
            ] 
        },
        { 
            title: "Proposal & Agreement", 
            icon: "mdi:handshake",
            points: [
                "Defining scope, timeline, and deliverables",
                "Adjusting pricing and collaboration model",
                "Finalizing agreement and project kickoff"
            ] 
        },
        { 
            title: "Execution & Configuration", 
            icon: "mdi:rocket-launch",
            points: [
                "Implementing infrastructure and services",
                "Applying best practice configurations",
                "Ensuring scalability and security"
            ] 
        },
        { 
            title: "Testing & Handover", 
            icon: "mdi:check-bold",
            points: [
                "Conducting functional and performance testing",
                "Validating system readiness",
                "Delivering documentation and knowledge transfer"
            ] 
        },
        { 
            title: "Support & Maintenance", 
            icon: "mdi:lifebuoy",
            points: [
                "Ongoing monitoring and support",
                "Incident handling and troubleshooting",
                "Continuous performance optimization"
            ] 
        }
    ];

    const container = document.getElementById("workflow");

    steps.forEach((step, index) => {
        const el = document.createElement("div");
        el.className = `step group flex flex-col items-center text-center relative cursor-pointer`;

        el.innerHTML = `
            ${index !== 0 ? `
                <div class="block lg:hidden mb-4">
                    <span class="iconify text-3xl" data-icon="mdi:arrow-down-bold" style="color:#343A40"></span>
                </div>
            ` : ""}

            <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-deep-blue/30">
                <span class="iconify text-3xl" data-icon="${step.icon}" style="color:#343A40"></span>
            </div>

            <div class="mt-6 p-6 rounded-2xl shadow-sm bg-white border border-gray-100 workflow-card h-full transition-all duration-300">
                <h3 class="font-semibold text-dark-slate mb-4 min-h-[48px] text-lg">
                    ${index + 1}. ${step.title}
                </h3>
                <ul class="text-sm space-y-3 text-left text-muted-gray">
                    ${step.points.map(p => `
                        <li class="flex gap-2">
                            <span class="text-deep-blue mt-1">•</span>
                            <span>${p}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>

            ${index !== steps.length - 1 ? `
                <div class="hidden lg:block absolute top-8 -right-6 text-4xl z-20">
                    <span class="iconify" data-icon="mdi:arrow-right-bold" style="color:#343A40"></span>
                </div>
            ` : ""}
        `;

        container.appendChild(el);
    });

    // Scroll Animation with Stagger Effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 120);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    setTimeout(() => {
        document.querySelectorAll('.step').forEach(step => observer.observe(step));
    }, 300);
</script>