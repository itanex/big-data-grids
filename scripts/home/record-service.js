(function () {
  'use strict';

  var module = angular.module("app.home");

  module.service('RecordService', Service);

  function Service() {
    var names = [
      'JAMES', 'JOHN', 'ROBERT', 'MICHAEL', 'WILLIAM', 'DAVID', 'RICHARD', 'CHARLES', 'JOSEPH', 'THOMAS', 'CHRISTOPHER', 'DANIEL', 'PAUL', 'MARK', 'DONALD', 'GEORGE', 'KENNETH', 'STEVEN', 'EDWARD', 'BRIAN', 'RONALD', 'ANTHONY', 'KEVIN', 'JASON', 'MATTHEW', 'GARY', 'TIMOTHY', 'JOSE', 'LARRY', 'JEFFREY', 'FRANK', 'SCOTT', 'ERIC', 'STEPHEN', 'ANDREW', 'RAYMOND', 'GREGORY', 'JOSHUA', 'JERRY', 'DENNIS', 'WALTER', 'PATRICK', 'PETER', 'HAROLD', 'DOUGLAS', 'HENRY', 'CARL', 'ARTHUR', 'RYAN', 'ROGER', 'JOE', 'JUAN', 'JACK', 'ALBERT', 'JONATHAN', 'JUSTIN', 'TERRY', 'GERALD', 'KEITH', 'SAMUEL', 'WILLIE', 'RALPH', 'LAWRENCE', 'NICHOLAS', 'ROY', 'BENJAMIN', 'BRUCE', 'BRANDON', 'ADAM', 'HARRY', 'FRED', 'WAYNE', 'BILLY', 'STEVE', 'LOUIS', 'JEREMY', 'AARON', 'RANDY', 'HOWARD', 'EUGENE', 'CARLOS', 'RUSSELL', 'BOBBY', 'VICTOR', 'MARTIN', 'ERNEST', 'PHILLIP', 'TODD', 'JESSE', 'CRAIG', 'ALAN', 'SHAWN', 'CLARENCE', 'SEAN', 'PHILIP', 'CHRIS', 'JOHNNY', 'EARL', 'JIMMY', 'ANTONIO', 'DANNY', 'BRYAN', 'TONY', 'LUIS', 'MIKE', 'STANLEY', 'LEONARD', 'NATHAN', 'DALE', 'MANUEL', 'RODNEY', 'CURTIS', 'NORMAN', 'ALLEN', 'MARVIN', 'VINCENT', 'GLENN', 'JEFFERY', 'TRAVIS', 'JEFF', 'CHAD', 'JACOB', 'LEE', 'MELVIN', 'ALFRED', 'KYLE', 'FRANCIS', 'BRADLEY', 'JESUS', 'HERBERT', 'FREDERICK', 'RAY', 'JOEL', 'EDWIN', 'DON', 'EDDIE', 'RICKY', 'TROY', 'RANDALL', 'BARRY', 'ALEXANDER', 'BERNARD', 'MARIO', 'LEROY', 'FRANCISCO', 'MARCUS', 'MICHEAL', 'THEODORE', 'CLIFFORD', 'MIGUEL', 'OSCAR', 'JAY', 'JIM', 'TOM', 'CALVIN', 'ALEX', 'JON', 'RONNIE', 'BILL', 'LLOYD', 'TOMMY', 'LEON', 'DEREK', 'WARREN', 'DARRELL', 'JEROME', 'FLOYD', 'LEO', 'ALVIN', 'TIM', 'WESLEY', 'GORDON', 'DEAN', 'GREG', 'JORGE', 'DUSTIN', 'PEDRO', 'DERRICK', 'DAN', 'LEWIS', 'ZACHARY', 'COREY', 'HERMAN', 'MAURICE', 'VERNON', 'ROBERTO', 'CLYDE', 'GLEN', 'HECTOR', 'SHANE', 'RICARDO', 'SAM', 'RICK', 'LESTER', 'BRENT', 'RAMON', 'CHARLIE', 'TYLER', 'GILBERT', 'GENE', 'MARC', 'REGINALD', 'RUBEN', 'BRETT', 'ANGEL', 'NATHANIEL', 'RAFAEL', 'LESLIE', 'EDGAR', 'MILTON', 'RAUL', 'BEN', 'CHESTER', 'CECIL', 'DUANE', 'FRANKLIN', 'ANDRE', 'ELMER', 'BRAD', 'GABRIEL', 'RON', 'MITCHELL', 'ROLAND', 'ARNOLD', 'HARVEY', 'JARED', 'ADRIAN', 'KARL', 'CORY', 'CLAUDE', 'ERIK', 'DARRYL', 'JAMIE', 'NEIL', 'JESSIE', 'CHRISTIAN', 'JAVIER', 'FERNANDO', 'CLINTON', 'TED', 'MATHEW', 'TYRONE', 'DARREN', 'LONNIE', 'LANCE', 'CODY', 'JULIO', 'KELLY', 'KURT', 'ALLAN', 'NELSON', 'GUY', 'CLAYTON', 'HUGH', 'MAX', 'DWAYNE', 'DWIGHT', 'ARMANDO', 'FELIX', 'JIMMIE', 'EVERETT', 'JORDAN', 'IAN', 'WALLACE', 'KEN', 'BOB', 'JAIME', 'CASEY', 'ALFREDO', 'ALBERTO', 'DAVE', 'IVAN', 'JOHNNIE', 'SIDNEY', 'BYRON', 'JULIAN', 'ISAAC', 'MORRIS', 'CLIFTON', 'WILLARD', 'DARYL', 'ROSS', 'VIRGIL', 'ANDY', 'MARSHALL', 'SALVADOR', 'PERRY', 'KIRK', 'SERGIO', 'MARION', 'TRACY', 'SETH', 'KENT', 'TERRANCE', 'RENE', 'EDUARDO', 'TERRENCE', 'ENRIQUE', 'FREDDIE', 'WADE', 'AUSTIN', 'STUART', 'FREDRICK', 'ARTURO', 'ALEJANDRO', 'JACKIE', 'JOEY', 'NICK', 'LUTHER', 'WENDELL', 'JEREMIAH', 'EVAN', 'JULIUS', 'DANA', 'DONNIE', 'OTIS', 'SHANNON', 'TREVOR', 'OLIVER', 'LUKE', 'HOMER', 'GERARD', 'DOUG', 'KENNY', 'HUBERT', 'ANGELO', 'SHAUN', 'LYLE', 'MATT', 'LYNN', 'ALFONSO', 'ORLANDO', 'REX', 'CARLTON', 'ERNESTO', 'CAMERON', 'NEAL', 'PABLO', 'LORENZO', 'OMAR', 'WILBUR', 'BLAKE', 'GRANT', 'HORACE', 'RODERICK', 'KERRY', 'ABRAHAM', 'WILLIS', 'RICKEY', 'JEAN', 'IRA', 'ANDRES', 'CESAR', 'JOHNATHAN', 'MALCOLM', 'RUDOLPH', 'DAMON', 'KELVIN', 'RUDY', 'PRESTON', 'ALTON', 'ARCHIE', 'MARCO', 'WM', 'PETE', 'RANDOLPH', 'GARRY', 'GEOFFREY', 'JONATHON', 'FELIPE', 'BENNIE', 'GERARDO', 'ED', 'DOMINIC', 'ROBIN', 'LOREN', 'DELBERT', 'COLIN', 'GUILLERMO', 'EARNEST', 'LUCAS', 'BENNY', 'NOEL', 'SPENCER', 'RODOLFO', 'MYRON', 'EDMUND', 'GARRETT', 'SALVATORE', 'CEDRIC', 'LOWELL', 'GREGG', 'SHERMAN', 'WILSON', 'DEVIN', 'SYLVESTER', 'KIM', 'ROOSEVELT', 'ISRAEL', 'JERMAINE', 'FORREST', 'WILBERT', 'LELAND', 'SIMON', 'GUADALUPE', 'CLARK', 'IRVING', 'CARROLL', 'BRYANT', 'OWEN', 'RUFUS', 'WOODROW', 'SAMMY', 'KRISTOPHER', 'MACK', 'LEVI', 'MARCOS', 'GUSTAVO', 'JAKE', 'LIONEL', 'MARTY', 'TAYLOR', 'ELLIS', 'DALLAS', 'GILBERTO', 'CLINT', 'NICOLAS', 'LAURENCE', 'ISMAEL', 'ORVILLE', 'DREW', 'JODY', 'ERVIN', 'DEWEY', 'AL', 'WILFRED', 'JOSH', 'HUGO', 'IGNACIO', 'CALEB', 'TOMAS', 'SHELDON', 'ERICK', 'FRANKIE', 'STEWART', 'DOYLE', 'DARREL', 'ROGELIO', 'TERENCE', 'SANTIAGO', 'ALONZO', 'ELIAS', 'BERT', 'ELBERT', 'RAMIRO', 'CONRAD', 'PAT', 'NOAH', 'GRADY', 'PHIL', 'CORNELIUS', 'LAMAR', 'ROLANDO', 'CLAY', 'PERCY', 'DEXTER', 'BRADFORD', 'MERLE', 'DARIN', 'AMOS', 'TERRELL', 'MOSES', 'IRVIN', 'SAUL', 'ROMAN', 'DARNELL', 'RANDAL', 'TOMMIE', 'TIMMY', 'DARRIN', 'WINSTON', 'BRENDAN', 'TOBY', 'VAN', 'ABEL', 'DOMINICK', 'BOYD', 'COURTNEY', 'JAN', 'EMILIO', 'ELIJAH', 'CARY', 'DOMINGO', 'SANTOS', 'AUBREY', 'EMMETT', 'MARLON', 'EMANUEL', 'JERALD', 'EDMOND', 'EMIL', 'DEWAYNE', 'WILL', 'OTTO', 'TEDDY', 'REYNALDO', 'BRET', 'MORGAN', 'JESS', 'TRENT', 'HUMBERTO', 'EMMANUEL', 'STEPHAN', 'LOUIE', 'VICENTE', 'LAMONT', 'STACY', 'GARLAND', 'MILES', 'MICAH', 'EFRAIN', 'BILLIE', 'LOGAN', 'HEATH', 'RODGER', 'HARLEY', 'DEMETRIUS', 'ETHAN', 'ELDON', 'ROCKY', 'PIERRE', 'JUNIOR', 'FREDDY', 'ELI', 'BRYCE', 'ANTOINE', 'ROBBIE', 'KENDALL', 'ROYCE', 'STERLING', 'MICKEY', 'CHASE', 'GROVER', 'ELTON', 'CLEVELAND', 'DYLAN', 'CHUCK', 'DAMIAN', 'REUBEN', 'STAN', 'AUGUST', 'LEONARDO', 'JASPER', 'RUSSEL', 'ERWIN', 'BENITO', 'HANS', 'MONTE', 'BLAINE', 'ERNIE', 'CURT', 'QUENTIN', 'AGUSTIN', 'MURRAY', 'JAMAL', 'DEVON', 'ADOLFO', 'HARRISON', 'TYSON', 'BURTON', 'BRADY', 'ELLIOTT', 'WILFREDO', 'BART', 'JARROD', 'VANCE', 'DENIS', 'DAMIEN', 'JOAQUIN', 'HARLAN', 'DESMOND', 'ELLIOT', 'DARWIN', 'ASHLEY', 'GREGORIO', 'BUDDY', 'XAVIER', 'KERMIT', 'ROSCOE', 'ESTEBAN', 'ANTON', 'SOLOMON', 'SCOTTY', 'NORBERT', 'ELVIN', 'WILLIAMS', 'NOLAN', 'CAREY', 'ROD', 'QUINTON', 'HAL', 'BRAIN', 'ROB', 'ELWOOD', 'KENDRICK', 'DARIUS', 'MOISES', 'SON', 'MARLIN', 'FIDEL', 'THADDEUS', 'CLIFF', 'MARCEL', 'ALI', 'JACKSON', 'RAPHAEL', 'BRYON', 'ARMAND', 'ALVARO', 'JEFFRY', 'DANE', 'JOESPH', 'THURMAN'];
      
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var ext = ['com', 'net', 'edu', 'mil', 'ninja', 'us', 'max', 'plus'];

    var Record = (function () {
      function Record(first, last, email, birthday) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.birthday = birthday;
      }
      return Record;
    })();

    function randomName() {
      return names[Math.floor(Math.random() * names.length)];
    }

    function randomAlpha() {
      return alpha[Math.floor(Math.random() * alpha.length)];
    }

    function randomExt() {
      return ext[Math.floor(Math.random() * ext.length)];
    }

    function randomEmail() {
      var name = randomName();
      var domain = randomAlpha() + randomAlpha() + randomAlpha();
      var ext = randomExt();

      return name + '@' + domain + '.' + ext;
    }

    function randomDate() {
      var start = new Date(1955, 11, 1);
      var end = new Date(1995, 12, 25)

      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    this.basicRecordSet = function (num) {
      var result = [];

      for (var i = 0; i < num; i++) {
        result.push(new Record(randomName(), randomName(), randomEmail(), randomDate()));
      }

      return result;
    }

    this.largeRecordSet = function (num) {
      return this.basicRecordSet(num * 1000);
    }
  }
})();
