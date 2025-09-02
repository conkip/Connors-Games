#!/bin/bash

# Exit immediately if a command fails
set -e

# --- CONFIGURE THESE ---
BUCKET_NAME="your-s3-bucket-name"
BUILD_DIR="dist"  # Change to "build" if you're using Create React App
AWS_PROFILE="default"  # Or leave empty if not using profiles
REGION="us-east-1" # Optional, only if needed
# -----------------------

echo "Starting deployment..."

# Build the React app
echo "Building React app..."
npm run build

# Sync build folder to S3
echo "Uploading to S3..."
if [ -z "$AWS_PROFILE" ]; then
  aws s3 sync "$BUILD_DIR" "s3://$BUCKET_NAME" --delete
else
  aws s3 sync "$BUILD_DIR" "s3://$BUCKET_NAME" --delete --profile "$AWS_PROFILE"
fi

echo "Deployment complete."
