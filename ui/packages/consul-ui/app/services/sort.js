import Service from '@ember/service';
import service from 'consul-ui/sort/comparators/service';
import serviceInstance from 'consul-ui/sort/comparators/service-instance';
import kv from 'consul-ui/sort/comparators/kv';
import check from 'consul-ui/sort/comparators/check';
import intention from 'consul-ui/sort/comparators/intention';
import token from 'consul-ui/sort/comparators/token';
import role from 'consul-ui/sort/comparators/role';
import policy from 'consul-ui/sort/comparators/policy';
import nspace from 'consul-ui/sort/comparators/nspace';
import node from 'consul-ui/sort/comparators/node';
import upstreamInstance from 'consul-ui/sort/comparators/upstream-instance';

const comparators = {
  service: service(),
  serviceInstance: serviceInstance(),
  kv: kv(),
  check: check(),
  intention: intention(),
  token: token(),
  role: role(),
  policy: policy(),
  nspace: nspace(),
  node: node(),
  upstreamInstance: upstreamInstance(),
};
export default class SortService extends Service {
  comparator(type) {
    return comparators[type];
  }
}
