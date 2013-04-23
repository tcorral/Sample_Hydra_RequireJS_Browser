<% _.each(events, function(event){%>
    <li id="<%=event.id%>">
        <div>
            <span>Title: <%=event.title%></span><br><span>Day: <%=event.day%></span>
        </div>
    </li>
<% });%>