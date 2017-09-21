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
    public partial class QuotaInfo :  IEquatable<QuotaInfo>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="QuotaInfo" /> class.
        /// </summary>
        /// <param name="MaxAvailable">Quota value for feature &#39;x&#39;.</param>
        /// <param name="Consumed">Consumed value for feature &#39;x&#39;.</param>
        /// <param name="Details">Quota meaning / measure unit (eg. MB)..</param>
        public QuotaInfo(long? MaxAvailable = null, long? Consumed = null, string Details = null)
        {
            this.MaxAvailable = MaxAvailable;
            this.Consumed = Consumed;
            this.Details = Details;
            
        }

        /// <summary>
        /// Quota value for feature 'x'
        /// </summary>
        /// <value>Quota value for feature 'x'</value>
        [DataMember(Name="max_available")]
        public long? MaxAvailable { get; set; }

        /// <summary>
        /// Consumed value for feature 'x'
        /// </summary>
        /// <value>Consumed value for feature 'x'</value>
        [DataMember(Name="consumed")]
        public long? Consumed { get; set; }

        /// <summary>
        /// Quota meaning / measure unit (eg. MB).
        /// </summary>
        /// <value>Quota meaning / measure unit (eg. MB).</value>
        [DataMember(Name="details")]
        public string Details { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class QuotaInfo {\n");
            sb.Append("  MaxAvailable: ").Append(MaxAvailable).Append("\n");
            sb.Append("  Consumed: ").Append(Consumed).Append("\n");
            sb.Append("  Details: ").Append(Details).Append("\n");
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
            return Equals((QuotaInfo)obj);
        }

        /// <summary>
        /// Returns true if QuotaInfo instances are equal
        /// </summary>
        /// <param name="other">Instance of QuotaInfo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QuotaInfo other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.MaxAvailable == other.MaxAvailable ||
                    this.MaxAvailable != null &&
                    this.MaxAvailable.Equals(other.MaxAvailable)
                ) && 
                (
                    this.Consumed == other.Consumed ||
                    this.Consumed != null &&
                    this.Consumed.Equals(other.Consumed)
                ) && 
                (
                    this.Details == other.Details ||
                    this.Details != null &&
                    this.Details.Equals(other.Details)
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
                if (this.MaxAvailable != null)
                    hash = hash * 59 + this.MaxAvailable.GetHashCode();
                if (this.Consumed != null)
                    hash = hash * 59 + this.Consumed.GetHashCode();
                if (this.Details != null)
                    hash = hash * 59 + this.Details.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(QuotaInfo left, QuotaInfo right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(QuotaInfo left, QuotaInfo right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}