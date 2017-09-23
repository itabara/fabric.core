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
    public partial class SecurityRule :  IEquatable<SecurityRule>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecurityRule" /> class.
        /// </summary>
        /// <param name="IpSource">source ip of the request.</param>
        /// <param name="AccessType">Allow or Deny.</param>
        public SecurityRule(string IpSource = null, string AccessType = null)
        {
            this.IpSource = IpSource;
            this.AccessType = AccessType;
            
        }

        /// <summary>
        /// source ip of the request
        /// </summary>
        /// <value>source ip of the request</value>
        [DataMember(Name="ip_source")]
        public string IpSource { get; set; }

        /// <summary>
        /// Allow or Deny
        /// </summary>
        /// <value>Allow or Deny</value>
        [DataMember(Name="access_type")]
        public string AccessType { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecurityRule {\n");
            sb.Append("  IpSource: ").Append(IpSource).Append("\n");
            sb.Append("  AccessType: ").Append(AccessType).Append("\n");
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
            return Equals((SecurityRule)obj);
        }

        /// <summary>
        /// Returns true if SecurityRule instances are equal
        /// </summary>
        /// <param name="other">Instance of SecurityRule to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecurityRule other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.IpSource == other.IpSource ||
                    this.IpSource != null &&
                    this.IpSource.Equals(other.IpSource)
                ) && 
                (
                    this.AccessType == other.AccessType ||
                    this.AccessType != null &&
                    this.AccessType.Equals(other.AccessType)
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
                if (this.IpSource != null)
                    hash = hash * 59 + this.IpSource.GetHashCode();
                if (this.AccessType != null)
                    hash = hash * 59 + this.AccessType.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(SecurityRule left, SecurityRule right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(SecurityRule left, SecurityRule right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}
