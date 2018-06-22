using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Huimin.classD;
using Newtonsoft.Json;
namespace Huimin.business
{
    /// <summary>
    /// getLiuzhuanData 的摘要说明
    /// </summary>
    public class getLiuzhuanData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            if (context.Request["DKBM"] != null && context.Request["DKBM"].ToString() != "")
            {
                string dKBM = context.Request["DKBM"].ToString().Trim();
                LiuzhuanHelper mdbHelper = new LiuzhuanHelper();

                context.Response.Write(mdbHelper.GetDataByDKBM(dKBM));
            }
           
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