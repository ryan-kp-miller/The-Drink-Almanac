echo "Creating the static files"
react-scripts start

echo "Deploying the static files to s3"
aws s3 sync build/ s3://ryankpmiller.com/thedrinkalmanac/

echo "Invalidating the cloudfront cache to force it to resync with s3"
aws cloudfront create-invalidation --distribution-id %AWS_CLOUDFRONT_ID% --paths /thedrinkalmanac/*

echo "Finished deploying!"