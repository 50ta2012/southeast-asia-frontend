echo "*** Clear all file in southeast-asia-backend/src/main/resources/static ***"
rm -rf ../southeast-asia-backend/src/main/resources/static/*
npm run build && cp -r build/* ../southeast-asia-backend/src/main/resources/static
echo "*** Copy all files from build to ../southeast-asia-backend/src/main/resources/static ***"