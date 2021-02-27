from align_api.models import Sequnces
from rest_framework import viewsets, permissions
from .serializers import AlignSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from datetime import datetime, timedelta
from .alignment import Alignment

# Align Viewset


class AlignViewSet(viewsets.ModelViewSet):
    queryset = Sequnces.objects.all()
    serializer_class = AlignSerializer
    size = queryset.__len__()

    def create(self, request, *args, **kwargs):
        sequence_data = request.data
        seqaligner = Alignment()
        res_seq = seqaligner.alignsequences(sequence_data["sequence"])
        new_sequence = Sequnces.objects.create(
            sequence=sequence_data["sequence"], result=res_seq)
        new_sequence.save()
        serializer = self.get_serializer_class()(new_sequence)
        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def history(self, request):
        time_threshold = datetime.now() - timedelta(hours=24)
        latest_recs = self.queryset.order_by(
            'created_at').filter(created_at__gte=time_threshold)
        print(self.size)
        serializer = self.get_serializer_class()(latest_recs, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def recent(self, request):
        time_threshold = datetime.now() - timedelta(hours=2)
        latest_recs = self.queryset.order_by(
            'created_at').filter(created_at__gte=time_threshold)
        print(self.size)
        serializer = self.get_serializer_class()(latest_recs, many=True)
        return Response(serializer.data)
