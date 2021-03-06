from datetime import datetime
import json

from google.appengine.ext import ndb
import webapp2


SERVER_TIME_KEY_NAME = "servertime" 

class ServerTimeMessages(ndb.Model):
  start_message = ndb.StringProperty()
  ending_message = ndb.StringProperty()

class ServerTime(webapp2.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'application/json'
    #self.response.headers.add_header("Access-Control-Allow-Origin", "*")
    custom_message = ServerTimeMessages.get_by_id(SERVER_TIME_KEY_NAME)
    if custom_message:
      response = {'message': custom_message.start_message + str(datetime.today()) + custom_message.ending_message}
    else:
      response = {'message': str(datetime.today())}
    self.response.out.write(json.dumps(response))
  
  def post(self):
    start_message = self.request.get("start")
    ending_message = self.request.get("ending")
    new_message = ServerTimeMessages(id=SERVER_TIME_KEY_NAME,
                                      start_message=start_message,
                                      ending_message=ending_message)
    new_message.put()
    self.response.headers['Content-Type'] = 'application/json'
    response = {"message": start_message + str(datetime.today()) + ending_message}
    self.response.out.write(json.dumps(response))