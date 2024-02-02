using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Almondcove.Api.Migrations
{
    /// <inheritdoc />
    public partial class addcompositekey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Authors_MemberId",
                table: "Authors");

            migrationBuilder.CreateIndex(
                name: "IX_Authors_MemberId_BlogPostId",
                table: "Authors",
                columns: new[] { "MemberId", "BlogPostId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Authors_MemberId_BlogPostId",
                table: "Authors");

            migrationBuilder.CreateIndex(
                name: "IX_Authors_MemberId",
                table: "Authors",
                column: "MemberId");
        }
    }
}
