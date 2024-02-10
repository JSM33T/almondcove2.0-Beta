﻿using System.ComponentModel.DataAnnotations;
using Almondcove.Api.Entities.Domain.Blogs;

namespace Almondcove.Api.Entities.Domain
{
    public enum CategoryType
    {
        Blog,
        Gallery,
        All
    }
    public class Category
    {
        public Guid Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Slug { get; set; }
        [StringLength(200)]
        public string Description { get; set; }
        public CategoryType Type { get; set; }
        public List<BlogPost> Posts { get; set; }
    }

    public class CategoryDTO
    {
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Slug { get; set; }
        public CategoryType Type { get; set; }

        [StringLength(200)]
        public string Description { get; set; }
    }
}
