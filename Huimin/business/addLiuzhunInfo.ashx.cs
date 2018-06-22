using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Huimin.classD;

namespace Huimin.business
{
    /// <summary>
    /// addLiuzhunInfo 的摘要说明
    /// </summary>
    public class addLiuzhunInfo : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string strReturn = "no";
            if (context.Request["dataInfo"] != null)
            {
                string dataInfo = context.Request["dataInfo"];
                Liuzhuan liuzhuan = (Liuzhuan)JsonConvert.DeserializeObject(dataInfo, typeof(Liuzhuan));
                LiuzhuanHelper mdbHelper = new LiuzhuanHelper();
                bool insertReturn = mdbHelper.Insert(liuzhuan);
                if (insertReturn)
                {
                    strReturn = "yes";
                }
            }
            context.Response.Write(strReturn);
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