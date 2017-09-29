/*
 * Wish Fabric Api - Middleware to Fabric
 *
 * Wish Fabric API (Integration)
 *
 * OpenAPI spec version: 1.0.1
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
    public class FTPApiController : Controller
    { 

        /// <summary>
        /// Delete ftp user
        /// </summary>
        /// <remarks>It will remove the ftp user. Cannot remove primary ftp account (admin@hosting_name) </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="packageId">Server package instance id</param>
        /// <param name="hostingAccountId">Hosting account unique id (PK). Cannot be changed.</param>
        /// <param name="ftpUsername">Current FTP username</param>
        /// <response code="202">Request is accepted and FabricTask &#39;_utid&#39; is returned</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting account not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpDelete]
        [Route("/provisioning/package/{package_id}/hosting/{hosting_account_id}/ftp/{ftp_username}")]
        [SwaggerOperation("ProvisioningPackagePackageIdHostingHostingAccountIdFtpFtpUsernameDelete")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult ProvisioningPackagePackageIdHostingHostingAccountIdFtpFtpUsernameDelete([FromHeader]string authorization, [FromRoute]long? packageId, [FromRoute]int? hostingAccountId, [FromRoute]string ftpUsername)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Get ftp user
        /// </summary>
        /// <remarks>Retrieves ftp user account details </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="packageId">Server package instance id</param>
        /// <param name="hostingAccountId">Hosting account unique id (PK). Cannot be changed.</param>
        /// <param name="ftpUsername">Current FTP username</param>
        /// <response code="200">Retrieve the ftp details</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting account not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpGet]
        [Route("/provisioning/package/{package_id}/hosting/{hosting_account_id}/ftp/{ftp_username}")]
        [SwaggerOperation("ProvisioningPackagePackageIdHostingHostingAccountIdFtpFtpUsernameGet")]
        [SwaggerResponse(200, type: typeof(FtpUserInfo))]
        public virtual IActionResult ProvisioningPackagePackageIdHostingHostingAccountIdFtpFtpUsernameGet([FromHeader]string authorization, [FromRoute]long? packageId, [FromRoute]int? hostingAccountId, [FromRoute]string ftpUsername)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FtpUserInfo>(exampleJson)
            : default(FtpUserInfo);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Edit ftp user details
        /// </summary>
        /// <remarks>Edit ftp user. Cannot edit username. </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="packageId">Server package instance id</param>
        /// <param name="hostingAccountId">Hosting account unique id (PK). Cannot be changed.</param>
        /// <param name="ftpUsername">Current FTP username</param>
        /// <param name="ftpUserUpdate">The ftp details</param>
        /// <response code="202">Request is accepted and FabricTask &#39;_utid&#39; is returned</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting account not found</response>
        /// <response code="409">An existing ftp &#39;username&#39; already exists</response>
        /// <response code="0">Unexpected error</response>
        [HttpPut]
        [Route("/provisioning/package/{package_id}/hosting/{hosting_account_id}/ftp/{ftp_username}")]
        [SwaggerOperation("ProvisioningPackagePackageIdHostingHostingAccountIdFtpFtpUsernamePut")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult ProvisioningPackagePackageIdHostingHostingAccountIdFtpFtpUsernamePut([FromHeader]string authorization, [FromRoute]long? packageId, [FromRoute]int? hostingAccountId, [FromRoute]string ftpUsername, [FromBody]FtpUserUpdate ftpUserUpdate)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Retrive the list of ftp accounts
        /// </summary>
        /// <remarks>The list of ftp account info </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="packageId">Server package instance id</param>
        /// <param name="hostingAccountId">Hosting account unique id (PK). Cannot be changed.</param>
        /// <response code="200">Array of FtpUserInfo</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting account not found</response>
        /// <response code="0">Unexpected error</response>
        [HttpGet]
        [Route("/provisioning/package/{package_id}/hosting/{hosting_account_id}/ftp")]
        [SwaggerOperation("ProvisioningPackagePackageIdHostingHostingAccountIdFtpGet")]
        [SwaggerResponse(200, type: typeof(List<FtpUserInfo>))]
        public virtual IActionResult ProvisioningPackagePackageIdHostingHostingAccountIdFtpGet([FromHeader]string authorization, [FromRoute]long? packageId, [FromRoute]int? hostingAccountId)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<FtpUserInfo>>(exampleJson)
            : default(List<FtpUserInfo>);
            return new ObjectResult(example);
        }


        /// <summary>
        /// Create a ftp user for current HostingAccount
        /// </summary>
        /// <remarks>Create a ftp user with required parameters </remarks>
        /// <param name="authorization">Access token</param>
        /// <param name="packageId">Server package instance id</param>
        /// <param name="hostingAccountId">Hosting account unique id (PK). Cannot be changed.</param>
        /// <param name="ftpUserCreate">The ftp details</param>
        /// <response code="202">Request is accepted and FabricTask &#39;_utid&#39; is returned</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">Invalid authorization token</response>
        /// <response code="404">Hosting account not found</response>
        /// <response code="409">An existing ftp &#39;username&#39; already exists</response>
        /// <response code="0">Unexpected error</response>
        [HttpPost]
        [Route("/provisioning/package/{package_id}/hosting/{hosting_account_id}/ftp")]
        [SwaggerOperation("ProvisioningPackagePackageIdHostingHostingAccountIdFtpPost")]
        [SwaggerResponse(200, type: typeof(FabricTask))]
        public virtual IActionResult ProvisioningPackagePackageIdHostingHostingAccountIdFtpPost([FromHeader]string authorization, [FromRoute]long? packageId, [FromRoute]int? hostingAccountId, [FromBody]FtpUserCreate ftpUserCreate)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<FabricTask>(exampleJson)
            : default(FabricTask);
            return new ObjectResult(example);
        }
    }
}