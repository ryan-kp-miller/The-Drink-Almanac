# load environment variables from .env if it exists
if [ ! -f ../.env ]
then
    echo "Loading environment variables"
    export $(cat .env | xargs)
fi

echo "Creating the static files"
npm run build

echo "Deploying the static files to s3"
aws s3 sync build/ s3://thedrinkalmanac.com/

echo "Invalidating the cloudfront cache to force it to resync with s3"
aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_ID --paths /*

echo "Finished deploying!"