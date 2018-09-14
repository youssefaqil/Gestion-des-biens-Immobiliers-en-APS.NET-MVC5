//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Omni.Agence.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Immeuble
    {
        public Immeuble()
        {
            this.Depenses = new HashSet<Depense>();
            this.Locals = new HashSet<Local>();
        }
    
        public int CodeImmeuble { get; set; }
        public int NumAdresse { get; set; }
        public Nullable<int> NumConcierge { get; set; }
        public string NomImmeuble { get; set; }
        public Nullable<int> ServiceImmeuble { get; set; }
        public Nullable<int> CodePers { get; set; }
        public Nullable<int> NbrEtage { get; set; }
        public string Lon { get; set; }
        public string Lat { get; set; }
        public bool Parking { get; set; }
        public bool Jardin { get; set; }
        public bool Interphone { get; set; }
        public Nullable<int> RefCodeImm { get; set; }
    
        public virtual Adresse Adresse { get; set; }
        public virtual Concierge Concierge { get; set; }
        public virtual ICollection<Depense> Depenses { get; set; }
        public virtual Personne Personne { get; set; }
        public virtual ICollection<Local> Locals { get; set; }
    }
}