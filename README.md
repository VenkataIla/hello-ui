# Hello application
###To run local the docker file
run command at application location. please check pwd where are you
go to project location
ex: c/Users/user/k8/hello-ui
check docker -v, is docker available
if available run this command
### To create docker image
docker build -f Dockerfile -t hello-ui .

### Check docker image
docker images
you can find

### Run Docker from local
docker run -p 8080:8080 hello

### Test application in local
http://localhost:8080/hello
the result will be : Hello Stakater

### providing access to kubernetes from local - run from normal command editor
@FOR /f "token=*" %i IN ('minikube -p minikube docker-env') DO @%i

### check cluster information
kubectl cluster-info

### See pods and deployments
kubectl get pods

kubectl get pods --all-namespaces

### To create a kubernetes deployment we should run the following command
kubectl run hello --image=hello:latest --port=8080 --image-pull-policy=Never

### expose the service
kubectl expose pod hello --type=NodePort

### after deploying in to kubernetes can see pods
![img.png](img.png)

