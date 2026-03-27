FROM ruby:3.3-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy Gemfile dulu supaya cache bundle
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy semua project
COPY . .

# Expose port Jekyll default
EXPOSE 4000

# Jalankan Jekyll serve (bisa diakses dari host)
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force_polling"]