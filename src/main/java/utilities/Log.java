package utilities;

import org.apache.log4j.Logger;

public class Log {
	 private static Logger Log = Logger.getLogger(Log.class.getName());
	 
	 public static void startTestCase() {
		 
			Log.info("*********START TEST CASE*********");
	 
			}
	 
	 public static void endTestCase() {
		 
			Log.info("*********END TEST CASE*********");
	 
			}
	 
	 public static void info(String message) {
		 
			Log.info(message);
	 
			}
	 
	 public static void error(String message) {
	 
	    Log.error(message);
	 
		}
	 
	 public static void fatal(String message) {
	 
	    Log.fatal(message);
	 
		}

}
