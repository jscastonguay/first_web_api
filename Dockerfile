FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

EXPOSE 5000
ENV ASPNETCORE_URLS http://+:5000
COPY TodoApi .
RUN dotnet build

#ENTRYPOINT [ "dotnet" "run todoapi.dll" ]
