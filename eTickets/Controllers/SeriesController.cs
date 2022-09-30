using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using eTickets.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace eTickets.Controllers
{
    [Route("admin/[controller]")]
    [ApiController]
    public class SeriesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public SeriesController(IConfiguration configuration,IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select serieId,name,description,cinema,genre,mainActor,producer,status,photoFileName from dbo.series";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Series sr)
        {
            string query = @"insert into dbo.series values
                            (
                            '" + sr.name + @"',
                            '" + sr.description + @"',
                            '" + sr.cinema + @"',
                            '" + sr.genre + @"',
                            '" + sr.mainActor + @"',
                            '" + sr.producer + @"',
                            '" + sr.status + @"',
                            '" + sr.photoFileName + @"')

                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Series sr)
        {
            string query = @"update dbo.series set                           
                            name = '" + sr.name + @"',
                            description = '" + sr.description + @"',
                            cinema = '" + sr.cinema + @"',
                            genre = '" + sr.genre + @"',
                            mainActor = '" + sr.mainActor + @"',
                            producer = '" + sr.producer + @"',
                            status = '" + sr.status + @"',
                            photoFileName = '" + sr.photoFileName + @"'

                            where serieId = " + sr.serieId + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.series 
                            where serieId = " + id + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("Default File Name, Exception Thrown");
            }
        }
    }
}
