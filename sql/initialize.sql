DROP TABLE IF EXISTS Weapons, Users, handguns, shotguns, rifles;

CREATE TABLE Weapons (
  weapon_id INT(12),
  handguns INT (12),
  rifles INT (12),
  shotguns INT (12),
  PRIMARY KEY (weapon_id)
);

CREATE TABLE Users (
  id INT (12),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  user_weapons VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE handguns (
  weapon_id INT (12),
  revolvers VARCHAR(100),
  semi_automatics VARCHAR(100),
  misc VARCHAR(100),
  FOREIGN KEY (weapon_id) REFERENCES Weapons(weapon_id)
);

CREATE TABLE shotguns (
  weapon_id INT (12),
  break_action VARCHAR(100),
  pump_action VARCHAR(100),
  semi_automatic VARCHAR(100),
  FOREIGN KEY (weapon_id) REFERENCES Weapons(weapon_id)
);

CREATE TABLE rifles (
  weapon_id INT (12),
  automatic VARCHAR(100),
  bolt_action VARCHAR(100),
  lever_action VARCHAR(100),
  semi_automatic VARCHAR(100),
  FOREIGN KEY (weapon_id) REFERENCES Weapons(weapon_id)
);
