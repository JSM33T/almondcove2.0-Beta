using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Almondcove.Api.Migrations
{
    /// <inheritdoc />
    public partial class categorychanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "BlogCategories",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "BlogCategories");
        }
    }
}
