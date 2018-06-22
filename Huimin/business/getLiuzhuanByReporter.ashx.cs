using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Huimin.classD;
namespace Huimin.business
{
    /// <summary>
    /// getLiuzhuanByReporter 的摘要说明
    /// </summary>
    public class getLiuzhuanByReporter : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            LiuzhuanHelper liuzhuanHelper = new LiuzhuanHelper();
            context.Response.Write(liuzhuanHelper.GetDataByReporter("liu3329"));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}