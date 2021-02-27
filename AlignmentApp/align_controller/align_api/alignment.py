import random
import os
# Import pairwise2 module
from Bio import pairwise2, SeqIO, SearchIO
from Bio.Seq import Seq
from Bio import Align, AlignIO
from math import log


class Alignment:
    protein_list = ['NC_000852', 'NC_007346', 'NC_008724', 'NC_009899', 'NC_014637', 'NC_020104', 'NC_023423', 'NC_023640', 'NC_023719',
                    'NC_027867']
    dir_path = os.path.dirname(os.path.realpath(__file__))
    dir_name = os.path.join(dir_path, "fastas")

    def alignsequences(self, seq2):
        protein = random.choice(self.protein_list)
        seq_name = protein + ".fasta"
        print(os.getcwd())
        file_name = os.path.join(self.dir_name, seq_name)
        record = SeqIO.read(file_name, "fasta")
        '''
        aligner = Align.PairwiseAligner()
        alignments = aligner.align(record.seq, Seq(seq2))
        alignment = pairwise2.align.globalxx(
            record, Seq(seq2))
        alignment = pairwise2.align.globalms(str(record.seq),
                                        str(seq2),
                                        2, -1, -5, -0.05)
        '''

        alignment = pairwise2.align.globalxx(
            record, Seq(seq2))
        result = " Found matching: " + \
            protein + " at: [" + \
            str(alignment[0].start) + ", " + str(alignment[0].end)+"]"
        return result
