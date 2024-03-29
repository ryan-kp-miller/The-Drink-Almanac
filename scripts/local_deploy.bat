echo "Setting local environment variables"
call env.bat

echo "Creating the static files"
call npm run build

echo "Deploying the static files to s3"
aws s3 sync build/ s3://thedrinkalmanac.com/

echo "Invalidating the cloudfront cache to force it to resync with s3"
aws cloudfront create-invalidation --distribution-id %AWS_CLOUDFRONT_ID% --paths /*

echo "Finished deploying!"