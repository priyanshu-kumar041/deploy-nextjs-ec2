whoami
echo "hi ubuntu!!!!!!!!!!!!!!"
cd nextjs-ci-cd
git pull origin main
npm install
npm run build
npm run start