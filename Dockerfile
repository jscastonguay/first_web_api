FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

COPY TodoApi/*.csproj .
RUN dotnet restore

COPY TodoApi .
RUN dotnet publish -c release -o /published

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build /published ./
EXPOSE 5000
ENTRYPOINT ["dotnet", "TodoApi.dll"]