using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.FileProviders;
using System.IO;
using System.Text;

namespace LifeSpot
{
    public static class EndpointMapper
    {
        /// <summary>
        ///  Маппинг CSS-файлов
        /// </summary>
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var cssFiles = new[] { "index.css" };

            foreach (var fileName in cssFiles)
            {
                builder.MapGet($"/Static/CSS/{fileName}", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", fileName);
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
            }
        }

        /// <summary>
        ///  Маппинг JS
        /// </summary>
        public static void MapJs(this IEndpointRouteBuilder builder)
        {
            var jsFiles = new[] { "index.js", "testing.js", "about.js", "slideshow.js" };

            foreach (var fileName in jsFiles)
            {
                builder.MapGet($"/Static/JS/{fileName}", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", fileName);
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
            }
        }

        /// <summary>
        ///  Маппинг Html-страниц
        /// </summary>
        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
            string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sidebar.html"));
            string slideShowHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "slideShow.html"));

            builder.MapGet("/", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");
                var viewText = await File.ReadAllTextAsync(viewPath);

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/testing", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/about", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml)
                    .Replace("<!--SLIDESHOW-->", slideShowHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("slideshow.html", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "slideshow.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath));

                await context.Response.WriteAsync(html.ToString());
            });
        }

        /// <summary>
        ///  Маппинг изображений
        /// </summary>
        public static void MapImg(this IEndpointRouteBuilder builder)
        {
            var images = new[] { "london.jpg", "ny.jpg", "spb.jpg" };

            foreach (var fileName in images)
            {
                builder.MapGet($"/img/slides/{fileName}", async context =>
                {
                    var imgPath = Path.Combine(Directory.GetCurrentDirectory(), "img", "slides", fileName);
                    await context.Response.SendFileAsync(imgPath);
                });
            }
        }
    }
}
