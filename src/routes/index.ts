import express from 'express';
import * as authRoute from '../routes/auth.route';
import * as storageRoute from '../routes/storage.route';
import * as trackRoute from '../routes/tracks.route';

const router = express.Router();

const routeRegistry: Record<string, express.Router> = {
  tracks: trackRoute.default,
  storage: storageRoute.default,
  auth: authRoute.default,
};

for (const [routeName, routeModule] of Object.entries(routeRegistry)) {
  router.use(`/${routeName}`, routeModule);
}

export default router;
