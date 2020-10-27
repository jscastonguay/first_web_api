FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

EXPOSE 5001
COPY TodoApi .
RUN dotnet build

#ENTRYPOINT [ "dotnet" "run todoapi.dll" ]
