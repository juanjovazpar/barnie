import { FastifyRequest, FastifyReply } from 'fastify';
import { lookup } from 'geoip-lite';
import { IRequestDetails } from '../interfaces/request-details.interface';

export const requestLogger = async (req: FastifyRequest, _: FastifyReply) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const geo = lookup(ip as string);
  const referrer = Array.isArray(req.headers['referer'])
    ? req.headers['referer'][0]
    : req.headers['referer'] || req.headers['referrer'] || '';
  const requestDetails: IRequestDetails = {
    ip: ip as string,
    userAgent: req.headers['user-agent'] || '',
    referrer: referrer as string,
    geoLocation: geo ? `${geo.city}, ${geo.region}, ${geo.country}` : 'N/A',
    timestamp: new Date(),
    deviceType: /mobile|tablet/i.test(req.headers['user-agent'] || '')
      ? 'Mobile'
      : 'Desktop',
    language: req.headers['accept-language'] || '',
  };

  (req as any).requestDetails = requestDetails;

  // TODO: Store calls in DB
  console.log('RequestDetails:', requestDetails);
};
