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

### providing access to kubernetes from local - run from normal command editor if windows operating system else eval $(minikube docker-evn)
@FOR /f "token=*" %i IN ('minikube -p minikube docker-env') DO @%i

### to check docker avaialble to access in kuberenetes 
docker images
### deploy in to kubernetes
kubectl apply -f deployment.yaml
result will be 
deployment.apps/hello-ui-deployment created
service/hello-ui-service created

### service check
minikube service hello-ui-service
will open a default browser with ip and port 

### Verify in kubernetes dashboard deplyments, servcies and pods
![image](https://user-images.githubusercontent.com/22048283/120287272-bdedbd00-c2dc-11eb-9b97-d9e05a97e7ec.png)

![image](https://user-images.githubusercontent.com/22048283/120287381-d5c54100-c2dc-11eb-80f5-6db6cc52af47.png)

### Test API
![image](https://user-images.githubusercontent.com/22048283/120287663-158c2880-c2dd-11eb-9fdd-35708ec49da7.png)

### after hitting api logs
![image](https://user-images.githubusercontent.com/22048283/120287597-01e0c200-c2dd-11eb-93d4-6b679bbaee2f.png)


