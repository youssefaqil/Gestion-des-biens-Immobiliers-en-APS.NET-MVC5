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
    
    public partial class TypeOp
    {
        public TypeOp()
        {
            this.Operations = new HashSet<Operation>();
        }
    
        public int codeType { get; set; }
        public string libelle { get; set; }
    
        public virtual ICollection<Operation> Operations { get; set; }
    }
}
