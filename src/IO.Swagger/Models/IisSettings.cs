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
    public partial class IisSettings :  IEquatable<IisSettings>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="IisSettings" /> class.
        /// </summary>
        /// <param name="Pipeline">type.</param>
        /// <param name="ClrVersion">runtime.</param>
        /// <param name="Status">status.</param>
        public IisSettings(string Pipeline = null, string ClrVersion = null, string Status = null)
        {
            this.Pipeline = Pipeline;
            this.ClrVersion = ClrVersion;
            this.Status = Status;
            
        }

        /// <summary>
        /// type
        /// </summary>
        /// <value>type</value>
        [DataMember(Name="pipeline")]
        public string Pipeline { get; set; }

        /// <summary>
        /// runtime
        /// </summary>
        /// <value>runtime</value>
        [DataMember(Name="clr_version")]
        public string ClrVersion { get; set; }

        /// <summary>
        /// status
        /// </summary>
        /// <value>status</value>
        [DataMember(Name="status")]
        public string Status { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class IisSettings {\n");
            sb.Append("  Pipeline: ").Append(Pipeline).Append("\n");
            sb.Append("  ClrVersion: ").Append(ClrVersion).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return Equals((IisSettings)obj);
        }

        /// <summary>
        /// Returns true if IisSettings instances are equal
        /// </summary>
        /// <param name="other">Instance of IisSettings to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(IisSettings other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.Pipeline == other.Pipeline ||
                    this.Pipeline != null &&
                    this.Pipeline.Equals(other.Pipeline)
                ) && 
                (
                    this.ClrVersion == other.ClrVersion ||
                    this.ClrVersion != null &&
                    this.ClrVersion.Equals(other.ClrVersion)
                ) && 
                (
                    this.Status == other.Status ||
                    this.Status != null &&
                    this.Status.Equals(other.Status)
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
                if (this.Pipeline != null)
                    hash = hash * 59 + this.Pipeline.GetHashCode();
                if (this.ClrVersion != null)
                    hash = hash * 59 + this.ClrVersion.GetHashCode();
                if (this.Status != null)
                    hash = hash * 59 + this.Status.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(IisSettings left, IisSettings right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(IisSettings left, IisSettings right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}