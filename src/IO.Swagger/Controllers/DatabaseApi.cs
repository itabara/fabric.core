/*
 * Wish Fabric.Core Api - Middleware to Fabric.Core
 *
 * Wish Fabric.Core API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Swashbuckle.SwaggerGen.Annotations;
using IO.Swagger.Models;

namespace IO.Swagger.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    public class DatabaseApiController : Controller
    { 

        /// <summary>
        /// Provision a database to the hosting database cluster
        /// </summary>
        /// <remarks>Create a database instance with required parameters. We assume a group of WebClusters will have own database cluster. </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">hosting account (primary domain)</param>
        /// <param name="databaseCreate">The database details.</param>
        /// <response code="202">Create a database instance</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting not found</response>
        /// <response code="409">An existing database already exists</response>
        /// <response code="0">Unexpected error</response>
        [HttpPost]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database")]
        [SwaggerOperation("CreateDatabase")]
        [SwaggerResponse(200, type: typeof(List<FabricTask>))]
        public virtual IActionResult CreateDatabase([FromHeader]string authorization, [FromRoute]string hostingName, [FromBody]DatabaseCreate databaseCreate)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<FabricTask>>(exampleJson)
            : default(List<FabricTask>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Remove database
        /// </summary>
        /// <remarks>It will remove the database and move it to snapshot for 30 days. </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">Hosting account (primary domain)</param>
        /// <param name="databaseName">Database name</param>
        /// <response code="202">Database delete</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpDelete]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseDatabaseNameDelete")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseDatabaseNameDelete([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Query database info
        /// </summary>
        /// <remarks>Retrieve database specific details </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">hosting account (primary domain)</param>
        /// <param name="databaseName">Database identifier</param>
        /// <response code="200">Database details</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpGet]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseDatabaseNameGet")]
        [SwaggerResponse(200, type: typeof(DatabaseInfo))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseDatabaseNameGet([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<DatabaseInfo>(exampleJson)
            : default(DatabaseInfo);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Edit database details
        /// </summary>
        /// <remarks>Edit database details. </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">Hosting account (primary domain)</param>
        /// <param name="databaseName">Database name</param>
        /// <param name="databaseUpdate">The database details to be updated</param>
        /// <response code="200">Database details edit</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpPut]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseDatabaseNamePut")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseDatabaseNamePut([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName, [FromBody]DatabaseUpdate databaseUpdate)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Retrieve hosting account databases list
        /// </summary>
        /// <remarks>Retrives the list of provisioned databases with details </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">hosting account (primary domain)</param>
        /// <response code="200">Array of DatabaseInfo</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or ftpuser not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpGet]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseGet")]
        [SwaggerResponse(200, type: typeof(List<DatabaseInfo>))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseGet([FromHeader]string authorization, [FromRoute]string hostingName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<DatabaseInfo>>(exampleJson)
            : default(List<DatabaseInfo>);
            return new ObjectResult(example);
        }
    }
}
