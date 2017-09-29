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
    public partial class ServerPackage :  IEquatable<ServerPackage>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ServerPackage" /> class.
        /// </summary>
        /// <param name="PackageId">server package instance id (PK) (required).</param>
        /// <param name="DiskQuota">DiskQuota.</param>
        /// <param name="FtpQuota">FtpQuota.</param>
        /// <param name="BandwidthQuota">BandwidthQuota.</param>
        /// <param name="DbQuota">DbQuota.</param>
        /// <param name="DbMaxSize">DbMaxSize.</param>
        /// <param name="Region">Allow region of provisioning.</param>
        public ServerPackage(long? PackageId = null, QuotaInfo DiskQuota = null, QuotaInfo FtpQuota = null, QuotaInfo BandwidthQuota = null, QuotaInfo DbQuota = null, QuotaInfo DbMaxSize = null, string Region = null)
        {
            // to ensure "PackageId" is required (not null)
            if (PackageId == null)
            {
                throw new InvalidDataException("PackageId is a required property for ServerPackage and cannot be null");
            }
            else
            {
                this.PackageId = PackageId;
            }
            this.DiskQuota = DiskQuota;
            this.FtpQuota = FtpQuota;
            this.BandwidthQuota = BandwidthQuota;
            this.DbQuota = DbQuota;
            this.DbMaxSize = DbMaxSize;
            this.Region = Region;
            
        }

        /// <summary>
        /// server package instance id (PK)
        /// </summary>
        /// <value>server package instance id (PK)</value>
        [DataMember(Name="package_id")]
        public long? PackageId { get; set; }

        /// <summary>
        /// Gets or Sets DiskQuota
        /// </summary>
        [DataMember(Name="disk_quota")]
        public QuotaInfo DiskQuota { get; set; }

        /// <summary>
        /// Gets or Sets FtpQuota
        /// </summary>
        [DataMember(Name="ftp_quota")]
        public QuotaInfo FtpQuota { get; set; }

        /// <summary>
        /// Gets or Sets BandwidthQuota
        /// </summary>
        [DataMember(Name="bandwidth_quota")]
        public QuotaInfo BandwidthQuota { get; set; }

        /// <summary>
        /// Gets or Sets DbQuota
        /// </summary>
        [DataMember(Name="db_quota")]
        public QuotaInfo DbQuota { get; set; }

        /// <summary>
        /// Gets or Sets DbMaxSize
        /// </summary>
        [DataMember(Name="db_max_size")]
        public QuotaInfo DbMaxSize { get; set; }

        /// <summary>
        /// Allow region of provisioning
        /// </summary>
        /// <value>Allow region of provisioning</value>
        [DataMember(Name="region")]
        public string Region { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ServerPackage {\n");
            sb.Append("  PackageId: ").Append(PackageId).Append("\n");
            sb.Append("  DiskQuota: ").Append(DiskQuota).Append("\n");
            sb.Append("  FtpQuota: ").Append(FtpQuota).Append("\n");
            sb.Append("  BandwidthQuota: ").Append(BandwidthQuota).Append("\n");
            sb.Append("  DbQuota: ").Append(DbQuota).Append("\n");
            sb.Append("  DbMaxSize: ").Append(DbMaxSize).Append("\n");
            sb.Append("  Region: ").Append(Region).Append("\n");
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
            return Equals((ServerPackage)obj);
        }

        /// <summary>
        /// Returns true if ServerPackage instances are equal
        /// </summary>
        /// <param name="other">Instance of ServerPackage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ServerPackage other)
        {

            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    this.PackageId == other.PackageId ||
                    this.PackageId != null &&
                    this.PackageId.Equals(other.PackageId)
                ) && 
                (
                    this.DiskQuota == other.DiskQuota ||
                    this.DiskQuota != null &&
                    this.DiskQuota.Equals(other.DiskQuota)
                ) && 
                (
                    this.FtpQuota == other.FtpQuota ||
                    this.FtpQuota != null &&
                    this.FtpQuota.Equals(other.FtpQuota)
                ) && 
                (
                    this.BandwidthQuota == other.BandwidthQuota ||
                    this.BandwidthQuota != null &&
                    this.BandwidthQuota.Equals(other.BandwidthQuota)
                ) && 
                (
                    this.DbQuota == other.DbQuota ||
                    this.DbQuota != null &&
                    this.DbQuota.Equals(other.DbQuota)
                ) && 
                (
                    this.DbMaxSize == other.DbMaxSize ||
                    this.DbMaxSize != null &&
                    this.DbMaxSize.Equals(other.DbMaxSize)
                ) && 
                (
                    this.Region == other.Region ||
                    this.Region != null &&
                    this.Region.Equals(other.Region)
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
                if (this.PackageId != null)
                    hash = hash * 59 + this.PackageId.GetHashCode();
                if (this.DiskQuota != null)
                    hash = hash * 59 + this.DiskQuota.GetHashCode();
                if (this.FtpQuota != null)
                    hash = hash * 59 + this.FtpQuota.GetHashCode();
                if (this.BandwidthQuota != null)
                    hash = hash * 59 + this.BandwidthQuota.GetHashCode();
                if (this.DbQuota != null)
                    hash = hash * 59 + this.DbQuota.GetHashCode();
                if (this.DbMaxSize != null)
                    hash = hash * 59 + this.DbMaxSize.GetHashCode();
                if (this.Region != null)
                    hash = hash * 59 + this.Region.GetHashCode();
                return hash;
            }
        }

        #region Operators

        public static bool operator ==(ServerPackage left, ServerPackage right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(ServerPackage left, ServerPackage right)
        {
            return !Equals(left, right);
        }

        #endregion Operators

    }
}
