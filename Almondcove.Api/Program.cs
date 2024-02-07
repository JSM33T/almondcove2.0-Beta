using Almondcove.Api.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Threading.RateLimiting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AlmondDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("almondCoveStr"));
});

builder.Services.AddMemoryCache();

builder.Services.AddRateLimiter(o => o
    .AddFixedWindowLimiter(policyName: "fixed", options =>
    {
        options.PermitLimit = 10;
        options.Window = TimeSpan.FromSeconds(10);
        options.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        options.QueueLimit = 5;

    }));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {

            builder.WithOrigins("https://almond-cove2-beta.vercel.app/", "http://localhost:5173/", "https://almondcove.in")
                                .AllowAnyHeader()
                                .AllowAnyMethod()
                                .SetIsOriginAllowed((x) => true)
                                .AllowCredentials(); ;
        });
});


builder.Services.AddCors(options =>
      {
          options.AddPolicy("DevelopmentPolicy",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                    });

          options.AddPolicy("ProductionPolicy", builder =>
          {
              builder.WithOrigins("https://almond-cove2-beta.vercel.app/", "https://almondcove.in")
                     .AllowAnyHeader()
                     .AllowAnyMethod();
          });
      });

var app = builder.Build();

app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("DevelopmentPolicy");
}

if (app.Environment.IsProduction())
{
    app.UseCors("ProductionPolicy");
}



app.UseAuthentication();
app.UseAuthorization();
app.UseStaticFiles();

app.MapControllers();
app.UseRateLimiter();
app.Run();
