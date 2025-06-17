FROM gitpod/workspace-full

RUN sdk install java 17.0.11-tem && sdk use java 17.0.11-tem
ENV JAVA_HOME=/home/gitpod/.sdkman/candidates/java/17.0.11-tem