class WorkResult {
  workResult: {};
  workDomain: any[];

  constructor(workDomain: any[]) {
    this.workResult = {};
    this.workDomain = workDomain;
  }

  supports(workName) {
    return -1 !== this.workDomain.indexOf(workName);
  }

  set(workName: string, result: any) {
    if (!this.supports(workName)) {
      throw new Error('Cannot set result - work "' + workName + '" is not supported.');
    }

    this.workResult[workName] = result;
  }

  has(workName) {
    return this.supports(workName) && undefined !== this.workResult[workName];
  }

  get(workName) {
    if (!this.supports(workName)) {
      throw new Error('Cannot get result - work "' + workName + '" is not supported.');
    }

    return this.workResult[workName];
  }

  hasAll() {
    return this.workDomain.every(key => this.has(key));
  }

  clear() {
    this.workResult = {};
  }

  reduce(reducer, initial) {
    return this.workDomain.reduce((reduced, workName) => {
      return reducer(reduced, this.workResult[workName]);
    }, initial);
  }
}

export = WorkResult;
