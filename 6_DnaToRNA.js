function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
        let rna = '';
        for(let i = 0; i < dna.length; i++){
        //     if(dna[i] === 'T'){
        //         rna += 'U';
        //     } else {
        //         rna += dna[i];
        //     }
        // VERSI SIMPLE 2 (Ternary)
        // rna += (dna[i] === 'T') ? 'U' : dna[i];
        }

        // return rna;

        //versi simple 3 dengan map
        
        // return dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('');

        return dna.split('T').join('U');

  }

  console.log(DNAtoRNA("RATINO"));
  console.log(DNAtoRNA("GCAUT"));