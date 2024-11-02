import { FastifyRequest } from 'fastify';
import RequestDetails from '../models/requestDetails.model';

export const saveRequestDetails = async (req: FastifyRequest) => {
  const requestDetails = req['requestDetails'];
  const endpointsToExclude = ['/'];

  if (endpointsToExclude.includes(req.raw.url)) {
    console.log('Skipping request details for:', req.raw.url);
    return;
  }

  if (requestDetails) {
    try {
      const newRequestDetail = new RequestDetails(requestDetails);
      await newRequestDetail.save();
    } catch (error) {
      console.error('Error saving request details to DB:', error);
    }
  }
};
