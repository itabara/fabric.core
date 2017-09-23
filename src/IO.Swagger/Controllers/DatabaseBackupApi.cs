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
    public class DatabaseBackupApiController : Controller
    { 

        /// <summary>
        /// Backup specified database
        /// </summary>
        /// <remarks>Create a database backup with required parameters. The platform will store the backup file and provide relative path from customer webspace. </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">hosting account (primary domain)</param>
        /// <param name="databaseName">Database name</param>
        /// <response code="202">Backup specified database</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpPost]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}/backups")]
        [SwaggerOperation("BackupDatabase")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult BackupDatabase([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get database backups
        /// </summary>
        /// <remarks>Get the available backups for the database</remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">Hosting account (primary domain)</param>
        /// <param name="databaseName">Database name</param>
        /// <response code="200">Backup current database</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpGet]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}/backups")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseDatabaseNameBackupsGet")]
        [SwaggerResponse(200, type: typeof(List<BackupInfo>))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseDatabaseNameBackupsGet([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<BackupInfo>>(exampleJson)
            : default(List<BackupInfo>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get database restores
        /// </summary>
        /// <remarks>Get database restores</remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">Hosting account (primary domain)</param>
        /// <param name="databaseName">Database name</param>
        /// <response code="200">Retrieve the restore history for the database</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpGet]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}/restores")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseDatabaseNameRestoresGet")]
        [SwaggerResponse(200, type: typeof(List<RestoreInfo>))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseDatabaseNameRestoresGet([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<RestoreInfo>>(exampleJson)
            : default(List<RestoreInfo>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Restore database content from the specified backup
        /// </summary>
        /// <remarks>Restore database content from the specified backup </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="hostingName">Hosting account (primary domain)</param>
        /// <param name="databaseName">Database name</param>
        /// <param name="backupInfo">The database details.</param>
        /// <response code="202">Restore the backup content into database</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting or database not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpPost]
        [Route("/itabara/Fabric.Core/1.0.0/provisioning/hosting/{hosting_name}/database/{database_name}/restores")]
        [SwaggerOperation("ProvisioningHostingHostingNameDatabaseDatabaseNameRestoresPost")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult ProvisioningHostingHostingNameDatabaseDatabaseNameRestoresPost([FromHeader]string authorization, [FromRoute]string hostingName, [FromRoute]string databaseName, [FromBody]BackupInfo backupInfo)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }
    }
}