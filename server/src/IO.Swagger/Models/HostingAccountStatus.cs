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
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace IO.Swagger.Models
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class HostingAccountStatus :  IEquatable<HostingAccountStatus>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="HostingAccountStatus" /> class.
        /// </summary>
        /// <param name="Status">HostingAccount status.</param>
        /// <param name="Comments">Reason of enable/disable change.</param>
        public HostingAccountStatus(string Status = null, string Comments = null)
        {
            this.Status = Status;
            this.Comments = Comments;
            
        }

        /// <summary>
        /// HostingAccount status
        /// </summary>
        /// <value>HostingAccount status</value>
        [DataMember(Name="status")]
        public string Status { get; set; }

        /// <summary>
        /// Reason of enable/disable change
        /// </summary>
        /// <value>Reason of enable/disable change</value>
        [DataMember(Name="comments")]
        public string Comments { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class HostingAccountStatus {\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Comments: ").Append(Comments).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((HostingAccountStatus)obj);
        }

        /// <summary>
        /// Returns true if HostingAccountStatus instances are equal
        /// </summary>
        /// <param name="other">Instance of HostingAccountStatus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(HostingAccountStatus other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.Status == other.Status ||
                    this.Status != null &&
                    this.Status.Equals(other.Status)
                ) && 
                (
                    this.Comments == other.Comments ||
                    this.Comments != null &&
                    this.Comments.Equals(other.Comments)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                if (this.Status != null)
                    hash = hash * 59 + this.Status.GetHashCode();
                if (this.Comments != null)
                    hash = hash * 59 + this.Comments.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(HostingAccountStatus left, HostingAccountStatus right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(HostingAccountStatus left, HostingAccountStatus right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}
