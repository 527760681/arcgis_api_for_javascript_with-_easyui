using Huimin.classD;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Huimin.business
{
    /// <summary>
    /// getBigCBFBM 的摘要说明
    /// </summary>
    public class getBigCBFBM : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string Cjbm = context.Request["cjbm"].ToString().Trim();
            float size = Convert.ToSingle(context.Request["size"].ToString().Trim());

            LiuzhuanHelper liuzhuanHelper = new LiuzhuanHelper();
            List<CBF> fbf = liuzhuanHelper.GetBigCBFBM(Cjbm, size);
            string jsonData = JsonConvert.SerializeObject(fbf);
            context.Response.Write(jsonData);

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