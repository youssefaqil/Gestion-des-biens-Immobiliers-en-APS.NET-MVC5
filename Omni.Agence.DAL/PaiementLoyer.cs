//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Omni.Agence.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class PaiementLoyer
    {
        public int codeOp { get; set; }
        public Nullable<int> CodePers { get; set; }
        public Nullable<int> CodeLocal { get; set; }
        public Nullable<int> CodeContrat { get; set; }
        public string MoyenPaiement { get; set; }
        public string Reference { get; set; }
        public Nullable<System.DateTime> DteDebut { get; set; }
        public Nullable<System.DateTime> DteFin { get; set; }
        public Nullable<int> NbrQuittanceImprime { get; set; }
        public Nullable<System.DateTime> DateFact { get; set; }
        public Nullable<System.DateTime> DateJuissance { get; set; }
        public Nullable<double> LoyerDebase { get; set; }
        public Nullable<int> Charge { get; set; }
        public Nullable<int> TaxeDedilite { get; set; }
        public Nullable<int> Garage { get; set; }
        public Nullable<double> LoyerNet { get; set; }
        public Nullable<System.DateTime> DateFinContrat { get; set; }
        public Nullable<int> FrequencePaiement { get; set; }
    
        public virtual ContratLocation ContratLocation { get; set; }
        public virtual Operation Operation { get; set; }
    }
}
