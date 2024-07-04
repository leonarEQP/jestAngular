import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should return users', () => {
    const users = service.getUsers();
    expect(users).toEqual(['Leonar', 'Elena', 'Jose Miguel']);
  });

  it('should add a user', () => {
    service.addUser('David');
    const users = service.getUsers();
    expect(users).toContain('David');
  });
});
