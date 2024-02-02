# init

```bash
Structure
├── Client/          # Frontend codebase (React.js)
└── API/           # Backend codebase (.NET Web API)

```

## Cloning

Cloning instructions

 ```bash
   git clone <repository_url>
```

## Mock env configurations

appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "Jwt": {
    "Issuer": "https://localhost:7067/",
    "Audience": "https://localhost:7067/",
    "Key": "gen"
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "almondCoveStr": "Data Source=localhost;Initial Catalog=DB_NAME;Trusted_Connection=True;Integrated Security=SSPI;TrustServerCertificate=True"
  }
}

```
