using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Geurvol.nl.Startup))]
namespace Geurvol.nl
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
