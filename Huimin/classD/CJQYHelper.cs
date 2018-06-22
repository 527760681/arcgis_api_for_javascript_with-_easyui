using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Linq;
using System.Web;

namespace Huimin.classD
{
    public class CJQYHelper
    {
        OleDbConnection con = null;
        public CJQYHelper()
        {
            con = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("../dataBase/huimin.mdb") + ";Persist Security Info=False");
        }

        public bool Insert(CJQY cjqy) {
            string insertSql = "insert into CJQYTable(CJQYBM,NumFarmer,CountArea) values(@CJQYBM,@NumFarmer,@CountArea)";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = insertSql;
            cmd.Parameters.Add(new OleDbParameter("@CJQYBM", cjqy.CJQYBM));
            cmd.Parameters.Add(new OleDbParameter("@NumFarmer", cjqy.NumFarmer));
            cmd.Parameters.Add(new OleDbParameter("@CountArea", cjqy.CountArea));
            con.Open();
            int infCount = cmd.ExecuteNonQuery();
            bool returnInfo = false;
            if (infCount == 1)
            {
                returnInfo = true;
            }
            con.Close();
            return returnInfo;
        }

        public CJQY GetData(string CJQYBM)
        {
            string getSql = @"select CJQYBM,NumFarmer,CountArea FROM CJQYTable WHERE CJQYBM = @CJQYBM";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.Parameters.Add(new OleDbParameter("@CJQYBM", CJQYBM));
            cmd.CommandText = getSql;
            con.Open();
            OleDbDataReader reader = cmd.ExecuteReader();
            CJQY cjqy = new CJQY();
            if (!reader.HasRows)
            {
                cjqy = null;
            }
            else
            {
                while (reader.Read())
                {
                    cjqy.CJQYBM = reader["CJQYBM"].ToString();
                    cjqy.NumFarmer = reader["NumFarmer"].ToString();
                    cjqy.CountArea = reader["CountArea"].ToString();
                }
            }
            con.Close();
            return cjqy;
        
        }
    }
}