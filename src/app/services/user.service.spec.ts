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

// USE MOCKING
/*describe('UserService', () => {
  let service: UserService;
  let mockUsers: string[]; // Declaración de la variable mockUsers

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    mockUsers = ['Leonar', 'Elena', 'Jose Miguel']; // Inicialización de mockUsers
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users', () => {
    jest.spyOn(service, 'getUsers').mockReturnValue(mockUsers);

    const users = service.getUsers();
    expect(users).toEqual(mockUsers);
  });

  it('should add a user', () => {
    const mockUser = 'David';
    jest.spyOn(service, 'addUser').mockImplementation((user: string) => {
      mockUsers.push(user);
    });

    service.addUser(mockUser);
    expect(mockUsers).toContain(mockUser);
  });
});*/
